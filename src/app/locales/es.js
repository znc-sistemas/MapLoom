(function() {
  var translations = {
    'new_map': 'Nuevo Mapa',
    'notifications_tab': 'Notificaciones',
    'no_notifications': 'Ninguna notificación',
    'map_layers': 'Capas de Mapa',
    'add_layer_btn': 'Añadir Capa',
    'add_layers': 'Añadir Capas',
    'remove_layer': 'Retirar la Capa',
    'attributes': 'Atributos',
    'local_geoserver': 'Geoserver Locales',
    'filter_layers': 'Capas Filtrantes',
    'add_new_server': 'Añadir Servidor Nuevo',
    'add_server': 'Añadir Servidor',
    'server_type': 'Tipo',
    'server_name': 'Nombre',
    'server_url': 'URL',
    'close_btn': 'Cerrar',
    'add_btn': 'Añadir',
    'merge_results': 'Combinar los Resultados',
    'cancel_btn': 'Cancelar',
    'done_btn': 'Terminado',
    'remove_btn': 'Eliminar',
    'conflict': 'CONFLICTO',
    'synchronization': 'Sincronización',
    'add_sync': 'Añadir Sinc',
    'merge': 'Fusionar',
    'config': 'Configuración',
    'repo': 'Repo',
    'remote': 'Remoto',
    'new_remote': 'Nuevo Remoto',
    'add_remote': 'Añadir Remoto',
    'repo_name': 'Nombre',
    'repo_url': 'URL',
    'repo_username': 'Nombre de Usuario',
    'repo_password': 'Contraseña',
    'toggle_menu': 'Menú Palanca',
    'single': 'Unico',
    'continuous': 'Continuo',
    'into': 'a',
    'error': 'Error',
    'warning': 'Advertencia',
    'failed_get_capabilities': 'No se encontraron capacidades: ',
    'fixed': 'ARREGLADO',
    'adds': 'Adiciones',
    'modifications': 'Modificaciones',
    'deletes': 'Eliminados',
    'merges': 'Fusiones',
    'cancel_merge': 'Cancelar la fusion',
    'complete_merge': 'Completar la fusion',
    'save_btn': 'Guardar',
    'single_conflict': '1 conflicto pendiente',
    'multiple_conflicts': '{{value}} conflictos pendientes',
    'sure_cancel_merge': 'Esta seguro que desea cancelar el proceso de fusion?',
    'sure_commit_merge': 'Esta seguro que desea finalizar y confirmar la fusion?',
    'commit_merge': 'Confirmar Fusion',
    'yes_btn': 'Si',
    'no_btn': 'No',
    'differences': 'Diferencias',
    'from': 'De',
    'to': 'A',
    'new_feature': 'Nuevo Elemento',
    'changed_feature': 'Elemento Modificada',
    'original_feature': 'Elemento Original',
    'removed_feature': 'Elemento Eliminada',
    'merged_feature': 'Elemento Fusionada',
    'location_lon_lat': 'Ubicacion ( lon, lat )',
    'show_history': 'Mostrar Historial',
    'show_table': 'Mostrar Tabla',
    'show_pics': 'Mostrar Imagenes',
    'edit_geometry': 'Editar Geometria',
    'edit_attributes': 'Editar Atributos',
    'delete_feature': 'Remover Elemento',
    'feature_diff_error': 'No se pudo retirar todas las diferencias para los elementos. ' +
        'Revisar la coneccion de red e intente nuevamente.',
    'no_local_branches': 'El deposito no tenia ramas locales.',
    'unable_to_get_branches': 'No se pudo identificar ramas del deposito. Intentar re añadir la capa.',
    'unable_to_get_remotes': 'No se pudo identificar los remotos del deposito. Intentar re añadir la capa.',
    'unable_to_get_datastore': 'No se pudo lograr el deposito de datos.',
    'unable_to_add_remote': 'No se pudo añadir el remoto de GeoGit: ',
    'unable_to_get_feature_type': 'No se pudo retirar el tipo de elemento del almacenaje de datos.',
    'unable_to_get_datastore_name': 'No se pudo determinar el nombre del almacenador de datos.',
    'layer_was_layer_group': 'No se pudo determinar si la capa era una capa grupal.',
    'start_date': 'Fecha de Inicio:',
    'end_date': 'Fecha de Conclusion:',
    'summarize_btn': 'Resumir',
    'anonymous': 'Anonimo',
    'history_failed': 'No se pudo buscar el historial de la capa. Favor intentar de nuevo.',
    'history': 'Historial',
    'btn_ok': 'Aceptar',
    'summary_of_changes': 'Resumen de Cambios',
    'too_many_changes': 'Se encontraron demasiados cambios para ser mostrados. De ser posible, minimice el rango.',
    'too_many_changes_refresh': 'Se realizaron demasiados cambios para ser mostrados. ' +
        'Solamente los primeros cambios {{value}} seran mostrados.',
    'no_changes_in_time_range': 'No se realizaron cambios a la capa dentro del marco de tiempo especificado.',
    'no_changes_in_commit': 'No se realizaron cambios a la capa.',
    'diff_unknown_error': 'Un error desconocido ocurrio al resumir las diferencias. Favor intentar nuevamente.',
    'in_lower_case': 'en',
    'to_lower_case': 'a',
    'from_lower_case': 'de',
    'history_for': 'Historial para {{value}}',
    'drag_zoom_not_supported': 'No existen las operaciones de "drag zoom" en este mapa.',
    'repository': 'Deposito',
    'transaction': 'Transaccion',
    'abort': 'Abortar',
    'resolve_conflicts': 'Resolver Conflictos',
    'merge_conflicts': 'Fusionar Conflictos',
    'conflicts_encountered': 'Se identificaron algunos problemas al realizar la operacion, ' +
        'desea resolverlos o desea abortar la fusion?',
    'conflict_unknown_error': 'Un error desconocido ocurrio al finalizar la transaccion. Favor intentar nuevamente.',
    'unable_to_resolve_conflicts': 'No se pudo resolver conflictos {{value}}. Favor intentar nuevamente.',
    'merge_unknown_error': 'Un error desconocido ocurrio al realizar la fusion. Favor intentar nuevamente.',
    'merge_successful': 'Fusion Exitosa',
    'merge_no_changes': 'La fusion resulto en ningun cambio.',
    'select_date_range': 'Seleccionar el Rango de Datos',
    'link': 'Enlace',
    'link_already_exists': 'El enlace ya existe.',
    'synchronize': 'Sincronizar',
    'no_email': 'No Tiene Email',
    'added': 'Agregado',
    'removed': 'Removido',
    'modified': 'Modificado',
    'feature': 'elemento',
    'features': 'elementos',
    'conflicted_features_resolved': 'Elementos en conflicto resueltos: ',
    'id': 'ID',
    'author_name': 'Nombre del Autor',
    'author_email': 'Email del Autor',
    'committer_name': 'Nombre del Destinatario',
    'committer_email': 'Email del Destinatario',
    'commit_time': 'Tiempo de Destino',
    'message': 'Mensaje',
    'export_csv': 'Exportar CSV',
    'sure_delete_feature': 'Esta seguro de querer eliminar este elemento?',
    'drawing_geometry': 'Dibujando la Geometria',
    'adding_feature': 'Añadiendo el Elemento',
    'must_create_feature': 'Debe crear un elemento antes de continuar.',
    'editing_geometry': 'Editando Geometria',
    'save_attributes': 'Guardar Atributos',
    'invalid_fields': 'Existen campos invalidos {{value}}. Debe solucionar estos problemas previo a poder guardar.',
    'add_feature': 'Añadir Elemento',
    'toggle_visibility': 'Modificar la Visibilidad',
    'remote_options': 'Opciones Remotas',
    'history_summary': 'Resumen de Historial',
    'zoom_world': 'Regresar a Mapa Mundial',
    'toggle_legend': 'Modificar la Descripcion',
    'refresh_layers': 'Refrescar Capas',
    'sure_remove_layer': 'Esta seguro de querer eliminar esta capa?',
    'pull_unknown_error': 'Un error desconocido ocurrio al realizar el retiro del remoto. Favor intentar nuevamente.',
    'local': 'Local',
    'pull_conflicts': 'Extraer Conflictos',
    'feature_id': 'Elemento ID',
    'table_view': 'Vista de Tabla',
    'filter_table': 'Filtrar',
    'clear_table_filter': 'Limpiar',
    'word_wrap': 'Ajuste de línea de alternancia',
    'title': 'es_Title',
    'abstract': 'es_Abstract',
    'save_this_map': 'es_Save this map.',
    'save_failed': 'es_Save failed',
    'map_save_failed': 'es_Map save failed with the following status'
  };

  var module = angular.module('loom_translations_es', ['pascalprecht.translate']);

  module.config(function($translateProvider) {
    $translateProvider.translations('es', translations);
  });

}());
