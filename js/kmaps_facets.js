(function ($) {
    Drupal.behaviors.kmaps_facets = {
        attach: function (context, settings) {
            var admin = settings.shanti_kmaps_admin;
            if (context == document) {
                $('.kmapfacettree').each(function() {
                    $tree = $(this);
                    var domain = $tree.data('kmtype');
                    var root_kmap_path = domain == 'subjects' ? admin.shanti_kmaps_admin_root_subjects_path : admin.shanti_kmaps_admin_root_places_path;
                    var base_url = domain == 'subjects' ? admin.shanti_kmaps_admin_server_subjects : admin.shanti_kmaps_admin_server_places;
                    $tree.kmapsTree({
                        termindex_root: admin.shanti_kmaps_admin_server_solr_terms,
                        kmindex_root: admin.shanti_kmaps_admin_server_solr,
                        type: domain,
                        root_kmap_path: root_kmap_path,
                        baseUrl: base_url
                    });
                });
                $('.kmapfacettree').each(function() { $(this).css("height", "auto"); });
            }
        }
    };
})(jQuery);