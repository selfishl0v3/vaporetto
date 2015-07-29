selectstops

  label(for='{opts.which}') {opts.label}
  select(name='{opts.which}')
    option(value='') {opts.emptyfield}
    option(each='{stops}', value='{id}') {description}