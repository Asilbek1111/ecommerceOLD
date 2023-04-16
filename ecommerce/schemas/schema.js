
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import product from './product'
import banner from './banner'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product,
   banner
  ]),
})
