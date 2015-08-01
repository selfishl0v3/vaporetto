
riot.tag('selectstops', '<label for="{opts.which}">{opts.label}</label><select name="{opts.which}"><option value="">{opts.emptyfield}</option><option each="{stops}" value="{id}">{description}</option></select>', function(opts) {

});

riot.tag('vaporetto', '<form id="search" onsubmit="{searchVoyage}" class="pure-form pure-form-stacked"><h1>Il tuo viaggio</h1><selectstops which="start" stops="{stops}" emptyfield="Scegli una partenza" label="Partenza"></selectstops><selectstops which="end" stops="{stops}" emptyfield="Scegli un arrivo" label="Arrivo"></selectstops><label for="time">Ora</label><input id="time" name="time" type="time"><button type="submit" class="pure-button"><span>Cerca</span></button></form><voyages results="{results}"></voyages>', function(opts) {
    var _this = this;
    
    this.getTimeNow = function() {
      var d = new Date();
      var h = (d.getHours() < 10 ? '0' : '') + d.getHours();
      var m = (d.getMinutes() < 10 ? '0': '') + d.getMinutes();
      return h + ':' + m;
    }.bind(this);
    
    this.retrieveStops = function() {
      reqwest({
        url: 'http://api.vaporetto.mobi/getStops',
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        error: function (err) {
          console.log(err);
          return err;
        },
        success: function (resp) {
          _this.tags.selectstops.forEach(function (s) { s.stops = resp; });
          _this.update();
        }
      });
    }.bind(this);
    
    this.searchVoyage = function(e) {
      e.preventDefault();
      var _this = this;
    
      reqwest({
        url: 'http://api.vaporetto.mobi/getResults',
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        data: {start: _this.tags.selectstops[0].start.value, end: _this.tags.selectstops[1].end.value, time: _this.time.value},
        error: function (err) {
          console.log(err);
        },
        success: function (resp) {

          _this.tags.voyages.results = [];
          _this.tags.voyages.results = _.chain(resp.results)
                                        .flatten()
                                        .map(function (r) { return (r.diretti ? r.diretti : []).concat(r.cambio ? r.cambio : []); })
                                        .flatten()
                                        .uniq(function (v) {
                                          return JSON.stringify(v);
                                        })
                                        .sortBy(function (v) {
                                          return moment(v[0].ora, 'HH:mm').unix();
                                        })
                                        .value();
          _this.tags.voyages.update();
    
        }
      });
    }.bind(this);
    
    
    this.on('mount', function () {
      _this.time.value = _this.getTimeNow();
      this.retrieveStops();
    });
  
});

riot.tag('voyage', '<div each="{stop, k in stops}" class="stops"><div if="{k == 2}" class="cambio">cambio here</div><p><pre>ora: {stop.ora}</pre><pre>fermata: {stop.fermata}</pre><pre>giorni: {stop.giorni}</pre><pre>linea: {stop.linea}</pre></p></div>', function(opts) {
    this.stops = opts.stops;
    
    this.on('updated', function () {

      this.stops = [];
      this.stops = opts.stops;
    });
  
});

riot.tag('voyages', '<div each="{val in results}" class="some-results"><voyage stops="{val}"></voyage><hr></div><div if="{results &amp;&amp; results.length == 0}" class="no-results"><p>Nessuna soluzione trovata</p></div>', function(opts) {
    this.results = opts.results;
    
    this.on('updated', function () {
      this.results = [];
      this.results = opts.results;
    });
  
});