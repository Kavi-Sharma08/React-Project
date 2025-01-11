import { it, expect, describe , test } from 'vitest'
import { sum } from "../components/sum"
test('adds 1 + 2 to equal 3', () => {
    const result = sum(1,2);
    expect(result).toBe(3)
})