import { assertProps, renderToDOM, shallowRender } from '../../modules/specHelpers'
import assert from 'assert'
import React from 'react/addons'

import View from '.'

suite('View', () => {
  test('prop "accessibilityLabel"', () => {
    assertProps.accessibilityLabel(View)
  })

  test('prop "accessibilityLiveRegion"', () => {
    assertProps.accessibilityLiveRegion(View)
  })

  test('prop "accessibilityRole"', () => {
    assertProps.accessibilityRole(View)
  })

  test('prop "accessible"', () => {
    assertProps.accessible(View)
  })

  test('prop "children"', () => {
    const children = 'children'
    const result = shallowRender(<View>{children}</View>)
    assert.equal(result.props.children, children)
  })

  test('prop "component"', () => {
    assertProps.component(View, 'div')
  })

  test('prop "onLayout"', (done) => {
    const style = { height: 100, width: 100 }
    const div = document.createElement('div')
    const result = renderToDOM(<View onLayout={onLayout} style={style} />, div)
    document.body.appendChild(result)

    function onLayout(event) {
      const { layout } = event.nativeEvent
      assert.equal(layout.height, style.height)
      assert.equal(layout.width, style.width)
      document.body.removeChild(result)
      done()
    }
  })

  test('prop "pointerEvents"', () => {
    const result = shallowRender(<View pointerEvents='box-only' />)
    assert.equal(result.props.style.pointerEvents, 'box-only')
  })

  test('prop "style"', () => {
    assertProps.style(View)
  })

  test('prop "testID"', () => {
    assertProps.testID(View)
  })
})
