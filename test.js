import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
describe("", function(){
  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        hello: {
          type: GraphQLString,
          resolve() {
            return 'world';
          }
        }
      }
    })
  });
  it("", function(done){
    var query = '{ hello }';
    graphql(schema, query).then(result => {
      // Prints
      // {
      //   data: { hello: "world" }
      // }
      console.log(result);
      done()
    });
  })
})
