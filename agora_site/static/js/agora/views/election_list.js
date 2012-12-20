(function() {
    var ElectionListView = Agora.GenericListView.extend({
        el: "#activity-list",
        templateEl: "#template-search-election-item"
    });

    Agora.ElectionListView = Backbone.View.extend({
        el: "div.search",

        initialize: function() {
            _.bindAll(this);
            this.infiniteListView = new ElectionListView();
        }
    });
}).call(this);