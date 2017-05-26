import React from 'react'
import { shallow } from 'enzyme'
import { Widgets, mapStateToProps } from './index'

describe('Widgets Class Component', () => {
  it('should render all base children', () => {
    const client = {
      id: 'test',
      token: {
        test: 'token',
      },
    }
    const widgets = {
      list: [
        { id: '123abc', name: 'test widget', description: 'test', size: 1 },
      ],
      requesting: false,
      successful: false,
      messages: [],
      errors: [],
    }

    const rendered = shallow(
      <Widgets
        invalid={false}
        widgetCreate={() => {}}
        widgetRequest={() => {}}
        reset={() => {}}
        handleSubmit={() => {}}
        client={client}
        widgets={widgets}
      />,
    )

    expect(rendered).toMatchSnapshot()
  })

  it('should render requesting message if requesting', () => {
    const client = {
      id: 'test',
      token: {
        test: 'token',
      },
    }
    const widgets = {
      list: [
        { id: '123abc', name: 'test widget', description: 'test', size: 1 },
      ],
      requesting: true,
      successful: false,
      messages: [],
      errors: [],
    }

    const rendered = shallow(
      <Widgets
        invalid={false}
        widgetCreate={() => {}}
        widgetRequest={() => {}}
        reset={() => {}}
        handleSubmit={() => {}}
        client={client}
        widgets={widgets}
      />,
    )

    expect(rendered).toMatchSnapshot()
  })

  it('should render error messages if not requesting and if there are error messages', () => {
    const client = {
      id: 'test',
      token: {
        test: 'token',
      },
    }
    const widgets = {
      list: [
        { id: '123abc', name: 'test widget', description: 'test', size: 1 },
      ],
      requesting: false,
      successful: false,
      messages: [],
      errors: [{ test: 'error' }],
    }

    const rendered = shallow(
      <Widgets
        invalid={false}
        widgetCreate={() => {}}
        widgetRequest={() => {}}
        reset={() => {}}
        handleSubmit={() => {}}
        client={client}
        widgets={widgets}
      />,
    )

    expect(rendered).toMatchSnapshot()
  })

  it('should render messages if successful and if messages are present', () => {
    const client = {
      id: 'test',
      token: {
        test: 'token',
      },
    }
    const widgets = {
      list: [
        { id: '123abc', name: 'test widget', description: 'test', size: 1 },
      ],
      requesting: false,
      successful: true,
      messages: [
        { test: 'success message' },
      ],
      errors: [],
    }

    const rendered = shallow(
      <Widgets
        handleSubmit={() => {}}
        invalid={false}
        client={client}
        widgets={widgets}
        widgetCreate={() => {}}
        widgetRequest={() => {}}
        reset={() => {}}
      />,
    )

    expect(rendered).toMatchSnapshot()
  })

  it('should return false if no client is present', () => {
    const widgets = {
      list: [
        { id: '123abc', name: 'test widget', description: 'test', size: 1 },
      ],
      requesting: false,
      successful: false,
      messages: [],
      errors: [],
    }

    const rendered = shallow(
      <Widgets
        handleSubmit={() => {}}
        invalid={false}
        widgets={widgets}
        widgetCreate={() => {}}
        widgetRequest={() => {}}
        reset={() => {}}
      />,
    )

    expect(rendered).toMatchSnapshot()
  })
})
