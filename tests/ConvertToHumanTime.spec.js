import 'jsdom-global/register';
import { expect } from 'chai';

import convertToHumanTime from './../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {

  it('should return 00:00 when pass 0ms', () => {
    expect(convertToHumanTime(0)).to.be.eql('0:00');
  });

  it('should return 00:01 when pass 1000ms', () => {
    expect(convertToHumanTime(1000)).to.be.eql('0:01');
  });

  it('should return 00:10 when pass 10000ms', () => {
    expect(convertToHumanTime(10000)).to.be.eql('0:10');
  });

  it('should return 00:25 when pass 25000ms', () => {
    expect(convertToHumanTime(25000)).to.be.eql('0:25');
  });

  it('should return 01:15 when pass 75000ms', () => {
    expect(convertToHumanTime(75000)).to.be.eql('1:15');
  });

  it('should return 15:00 when pass 900000ms', () => {
    expect(convertToHumanTime(900000)).to.be.eql('15:00');
  });

  it('should return 3:35 when pass 214946ms', () => {
    expect(convertToHumanTime(214946)).to.be.eql('3:34');
  });
});
