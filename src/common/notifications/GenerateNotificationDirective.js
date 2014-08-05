(function() {

  var module = angular.module('loom_generate_notification_directive', []);

  module.directive('loomGenerateNotification',
      function($rootScope, $translate, mapService, geogitService, refreshService) {
        return {
          templateUrl: 'notifications/partial/generatenotification.tpl.html',
          link: function(scope, element, attrs) {
            scope.startDate = [new Date().toISOString()];
            scope.active = true;
            scope.contentHidden = true;
            scope.isLoading = false;

            element.closest('.modal').on('hidden.bs.modal', function(e) {
              if (!scope.$$phase && !$rootScope.$$phase) {
                scope.$apply(function() {
                  scope.contentHidden = true;
                });
              } else {
                scope.contentHidden = true;
              }
            });
            element.closest('.modal').on('show.bs.modal', function(e) {
              if (!scope.$$phase && !$rootScope.$$phase) {
                scope.$apply(function() {
                  scope.contentHidden = false;
                  scope.startDate = [new Date().toISOString()];
                });
              } else {
                scope.contentHidden = false;
                scope.startDate = [new Date().toISOString()];
              }
            });

            scope.cancel = function() {
              element.closest('.modal').modal('hide');
              scope.isLoading = false;
            };

            scope.onDiff = function() {
              scope.isLoading = true;
              var layers = mapService.getLayers();

              if (!goog.isArray(layers)) {
                layers = [layers];
              }
              if (layers.length < 1) {
                scope.isLoading = false;
                return;
              }
              var repos = {};
              var layer = null;
              var metadata = null;
              for (var i = 0; i < layers.length; i++) {
                layer = layers[i];
                metadata = layer.get('metadata');
                if (goog.isDefAndNotNull(metadata.isGeoGit) && metadata.isGeoGit === true &&
                    !goog.isDefAndNotNull(repos[metadata.repoId])) {
                  repos[metadata.repoId] = {};
                  repos[metadata.repoId].branchName = metadata.branchName;
                }
              }

              var repoArray = [];
              for (var repoId in repos) {
                if (repos.hasOwnProperty(repoId)) {
                  repoArray.push(repoId);
                }
              }

              var repoIndex = 0;

              var updateRepoCommit = function(response) {
                if (goog.isDefAndNotNull(response.sinceCommit)) {
                  var lastCommit = response.sinceCommit;
                  var lastCommitId = '0000000000000000000000000000000000000000';

                  if (goog.isDefAndNotNull(lastCommit.parents) && goog.isObject(lastCommit.parents)) {
                    if (goog.isDefAndNotNull(lastCommit.parents.id)) {
                      if (goog.isArray(lastCommit.parents.id)) {
                        lastCommitId = lastCommit.parents.id[0];
                      } else {
                        lastCommitId = lastCommit.parents.id;
                      }
                    }
                  }
                  geogitService.getRepoById(repoArray[repoIndex]).commitId = lastCommitId;
                }
                repoIndex++;
                if (repoIndex === repoArray.length) {
                  scope.isLoading = false;
                  refreshService.refreshLayers();
                  scope.cancel();
                } else {
                  processRepo();
                }
              };
              var processRepo = function() {
                var logOptions = new GeoGitLogOptions();
                logOptions.sinceTime = new Date(scope.startDate[0]).getTime();
                logOptions.returnRange = true;
                logOptions.until = repos[repoArray[repoIndex]].branchName;
                geogitService.command(repoArray[repoIndex], 'log', logOptions).then(updateRepoCommit);
              };
              processRepo();
            };
          }
        };
      }
  );
})();
