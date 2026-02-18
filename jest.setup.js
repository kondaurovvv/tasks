global.prompt = jest.fn((message, defaultValue) => defaultValue || '')
global.alert = jest.fn()
global.confirm = jest.fn(() => true)