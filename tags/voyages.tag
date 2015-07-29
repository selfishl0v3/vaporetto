voyages

  .some-results(each='{val in results}')
    voyage(stops='{val}')
    hr

  .no-results(if='{results && results.length == 0}')
    p Nessuna soluzione trovata


  script.
    this.results = opts.results;

    this.on('updated', function () {
      this.results = [];
      this.results = opts.results;
    });