voyage

  .stops(each='{stop, k in stops}')
    .cambio(if='{k == 2}') cambio here
    p
      pre ora: {stop.ora}
      pre fermata: {stop.fermata}
      pre giorni: {stop.giorni}
      pre linea: {stop.linea}

  script.
    this.stops = opts.stops;

    this.on('updated', function () {
      //console.log('voyage updated', this);
      this.stops = [];
      this.stops = opts.stops;
    });