// @flow strict

const always = <a>(value: a): (<_>(_) => a) => () => value

always.True = always(true)
always.False = always(false)
always.Null = always(null)
always.Void = always()
always.EmptyString = always("")
always.EmptyObject = always(Object.freeze({}))
const EmptyArray: <_, a>(_) => a[] = always((Object.freeze([]): any[]))
always.EmptyArray = EmptyArray

const table: Object = Object.freeze(Object.create(null))
const EmptyTable: <_, key, value>(_) => { [key]: value } = always(table)
always.EmptyTable = EmptyTable

export default always
