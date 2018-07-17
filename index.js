fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const myCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let idx = 0; idx < myCollection.length; idx++)
        iteratee(myCollection[idx])

      return collection
    },

    map: function(collection, iteratee) {
      let newCollection = []
      const myCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let idx = 0; idx < myCollection.length; idx++)
        newCollection.push(iteratee(myCollection[idx]))

      return newCollection
    },


    reduce: function(collection, iteratee, acc) {
      for (let element in collection) {
        acc = iteratee(acc, collection[element], collection)
      }
      return acc
    },

    find: function(array, predicate) {
        for (let i = 0; i < array.length; i++) {
          if (predicate(array[i])) {
            return true
            break;
          }
        }
        return false
    },

    filter: function(collection, predicate){
      result = []
      for (const element of collection){
        if (predicate(element)) {
          result.push(element)
        }
      }
      return result
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n) {
      if (n === undefined) {
        return collection[0];
      } else {
        return collection.splice(0, n)
      }
    },

    last: function(collection, n) {
      if (n === undefined) {
        return collection[collection.length - 1];
      } else {
        return collection.splice(-n)
      }
    },

    compact: function(array) {
      let result = []
      for (const element of array){
        if (element) {
          result.push(element)
        }
      }
      return result
    },

    sortBy: function(array, cb) {
      let result = []
      for (const element of array) {
        result.push(cb(element))
      }
      return result.sort( function (a, b) {return a - b} )
    },

    flatten: function(arr, shallow = false, result = []) {
      if (shallow) {
        for (const element of arr) {
          if (Array.isArray(element)) {
            for (const e of element) {
              result.push(e)
            }
          } else {
            result.push(element)
          }
        }
      } else {
        for (const element of arr) {
          if (Array.isArray(element)) {
            // debugger;
            fi.flatten(element, false, result)
          } else {
            result.push(element)
          };
        };
      }
      return result;
    },


    uniq: function(array, isSorted=false, iteratee) {
     let result=[];
     if (iteratee===undefined) {
       for (let value of array) {
          if (result.indexOf(value) === -1) {
             result.push(value)
          }
       }
     } else {
      let iterativevalues=[];
       for (let value of array) {
          let newval = iteratee(value);
          if (iterativevalues.indexOf(newval) === -1){
            iterativevalues.push(newval);
            result.push(value);
          }
       }
      }
      return result
    },

    keys: function(object) {
      let result = []
      for (const key in object) {
        result.push(key)
      }
      return result
    },

    values: function(object) {
      let result = []
      for (const key in object) {
        result.push(object[key])
      }
      return result
    },

    functions: function(object) {
      let result = []
      for (const key in object)
        if (typeof(object[key]) === 'function') {
          result.push(key)
        }
       return result.sort()
     },
  }
})()

fi.libraryMethod()
