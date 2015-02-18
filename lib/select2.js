var Schemas = {};

this.Years2 = new Mongo.Collection('years2');

Schemas.Years2Schema = new SimpleSchema({
  yearNumber: {
    type: String,
    autoform: {
      type: "select2", /* If changed from select2 to select, the values are maintained when the +/- buttons are pressed. */ 
      options: function () {
        return [
          {label: "2013", value: "2013"},
          {label: "2014", value: "2014"},
          {label: "2015", value: "2015"}
        ];
      }
    }    
  },
  yearNote: {
    type: String,
    label: 'Note'
  }
});

Schemas.List2Schema = new SimpleSchema({
  name: {
    type: String
  },
  years: {
    type: [Object],
    minCount: 1
  },
  "years.$": {
    type: Schemas.Years2Schema
  }
});

Years2.attachSchema(Schemas.List2Schema);
