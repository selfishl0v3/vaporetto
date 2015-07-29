vaporetto


  //
    h1 vaporetto
    blockquote la tua guida per Venezia!



  form#search.pure-form.pure-form-stacked(onsubmit='{searchVoyage}')

    h1 Il tuo viaggio

    selectstops(which='start', stops='{stops}', emptyfield = 'Scegli una partenza', label='Partenza')
    selectstops(which='end', stops='{stops}', emptyfield = 'Scegli un arrivo', label='Arrivo')

    label(for='time') Ora
    input#time(name='time', type='time')

    button.pure-button.pure-button-primary(type='submit')
      span Cerca



  voyages(results='{results}')



  script.

    var _this = this;

    getTimeNow() {
      var d = new Date();
      var h = (d.getHours() < 10 ? '0' : '') + d.getHours();
      var m = (d.getMinutes() < 10 ? '0': '') + d.getMinutes();
      return h + ':' + m;
    }

    retrieveStops() {
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
    };

    searchVoyage(e) {
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
          //console.log(resp);
          _this.tags.voyages.results = [];
          _this.tags.voyages.results = _.chain(resp.results)
                                        .flatten()
                                        .map(function (r) { return (r.diretti ? r.diretti : []).concat(r.cambio ? r.cambio : []); })
                                        .flatten()
                                        .value();
          //console.log('--> ', _this.tags.voyages.results);
          _this.tags.voyages.update();

        }
      });
    }


    this.on('mount', function () {
      _this.time.value = _this.getTimeNow();
      this.retrieveStops();
    });