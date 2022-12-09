import jwt from 'jsonwebtoken'

import { createJwtToken } from '../createJwtToken'

describe('util#createJwtToken', () => {
  test('correctly returns the JWT token', () => {
    const user = {
      id: 1,
      urs_id: 'testuser',
      site_preferences: {},
      urs_profile: {
        first_name: 'test'
      }
    }

    const result = createJwtToken(user, 'prod')
    const decoded = jwt.decode(result)

    expect(decoded).toEqual(expect.objectContaining({
      id: 1,
      preferences: {},
      username: 'testuser',
      ursProfile: {
        first_name: 'test'
      }
    }))
  })
})
