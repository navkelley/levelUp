import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as Chai from 'chai';
let should = Chai.should();
let expect = Chai.expect;

import VideoDetail from '../js/components/video_detail';
//TODO: need to update once get twitch added!!!!!

describe('YouTube Embed Video', () => {
  it('Renders the video player', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<VideoDetail />);
    const result = renderer.getRenderOutput();
    console.log(result);

    result.should.be.an('object');
    result.should.have.property('type');
    expect(result.props).to.be.an('object');
    result.props.should.have.property('children');
  });
});