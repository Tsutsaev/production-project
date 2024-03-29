import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from '../../types/counterSchema'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue.test', () => {
    test('testDescription', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})
