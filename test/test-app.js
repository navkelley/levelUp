import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as Chai from 'chai';
import VideoDetail from '../src/js/components/youtube/youtube_video_detail';

const should = Chai.should();
const expect = Chai.expect;

//TODO: need to update once get twitch added!!!!!

describe('YouTube Embed Video', () => {
  it('Renders the video player hold icon', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<VideoDetail />);
    const result = renderer.getRenderOutput();
    console.log(result);

    result.should.be.an('object');
    result.should.have.property('type');
    expect(result.props).to.be.an('object');
    result.props.should.have.property('className');
    result.props.property.className.should.eq('fa fa-gamepad fa-3x youTube-gamepad');
  });
});
