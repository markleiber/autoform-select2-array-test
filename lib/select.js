if (Meteor.isClient){
  SimpleSchema.debug;
  AutoForm.debug();
}

var Schemas = {};

this.Years = new Mongo.Collection('years');

Schemas.YearsSchema = new SimpleSchema({
  yearNumber: {
    type: String,
    autoform: {
      type: "select", /* If changed to select2 from select, the values are not maintained when the +/- buttons are pressed. */ 
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

Schemas.ListSchema = new SimpleSchema({
  name: {
    type: String
  },
  years: {
    type: [Object],
    minCount: 1
  },
  "years.$": {
    type: Schemas.YearsSchema
  }
});

Years.attachSchema(Schemas.ListSchema);
