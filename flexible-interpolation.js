get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`

// es5
// get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);
