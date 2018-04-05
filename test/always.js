/* @flow */

import always from "../"
import test from "blue-tape"

test("test baisc", async test => {
  test.isEqual(typeof always, "function")
  test.equal(always(1)(), 1)

  const myObject = {}
  const alwaysMyObject = always(myObject)
  test.equal(alwaysMyObject(), myObject)
  test.equal(alwaysMyObject(323), myObject)
  test.equal(alwaysMyObject("hi"), myObject)
  test.equal(alwaysMyObject({ x: 2 }), myObject)
  test.equal(alwaysMyObject({ y: 7 }), alwaysMyObject(4))

  test.equal(always.True(), true)
  test.equal(always.True(false), true)

  test.equal(always.False(), false)
  test.equal(always.False({}), false)

  test.equal(always.Null(), null)
  test.equal(always.Null({}, 4), null)

  test.equal(always.Void(), undefined)
  test.equal(always.Void("hello"), undefined)

  test.equal(always.EmptyString(), "")
  test.equal(always.EmptyString("hello there"), "")
  test.equal(always.EmptyString({ x: 20 }), "")

  test.equal(always.EmptyObject(), always.EmptyObject())
  test.deepEqual(always.EmptyObject(), {})
  test.ok(Object.isFrozen(always.EmptyObject()))

  test.equal(always.EmptyArray("hello"), always.EmptyArray([2]))
  test.deepEqual(always.EmptyArray(), [])
  test.ok(Object.isFrozen(always.EmptyArray()))

  test.equal(always.EmptyArray("hello"), always.EmptyArray([2]))
  test.deepEqual(always.EmptyArray(), [])
  test.ok(Object.isFrozen(always.EmptyArray()))

  test.equal(always.EmptyTable(), always.EmptyTable({ x: 1, y: 2 }))
  test.deepEqual(always.EmptyTable(), {})
  test.ok(Object.isFrozen(always.EmptyTable()))
  test.equal(Object.getPrototypeOf(always.EmptyTable()), null)
})
