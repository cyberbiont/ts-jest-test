import { expect } from 'chai';


describe(`uses jest expect`, () => {
	it(`should pass`, () => {
		const a = null;
		jestExpect(a).toBeNull();
	});
	it(`should fail`, () => {
		const a = 1;
		jestExpect(a).toBeNull();
	});
});

describe(`uses chai expect`, () => {
	it(`should pass`, () => {
		const a = null;
		expect(a).to.be.null;
	});

	it(`should fail`, () => {
		const b = 1;
		expect(b).to.be.null;
	});
});
