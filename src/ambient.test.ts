import { expect } from 'chai';
describe('uses ambient type', () => {
  const cfg: AmbientType = {
		value: `test`,
  };

  const cfg2: UndefinedType = {
		value: `test`,
  };

  it('should pass', () => {
    expect(cfg.value).to.equal('test');
  });

  // it('should pass too', () => {
  //   expect(cfg2.value).to.equal('test');
  // });

});
