import queryStringQuery from '../../src/queries/query-string-query'
import {expect} from 'chai'

describe('queryStringQuery', () => {

  it('should create a query_string query', () => {
    let result = queryStringQuery('this AND that OR thus')
    expect(result).to.eql({
      query_string: {
        query: 'this AND that OR thus'
      }
    })
  })

  it('should create a query_string query with fields', () => {
    let result = queryStringQuery(['fields1', 'fields2'], 'this AND that OR thus')
    expect(result).to.eql({
      query_string: {
        query: 'this AND that OR thus',
        fields: ['fields1', 'fields2']
      }
    })
  })
})
