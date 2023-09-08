require 'rails_helper'

RSpec.describe Post, type: :model do
  context 'comment association' do
    it 'should increment comments_count' do
      post = build(:post)
      post.comments << build(:comment)
      post.save
      expect(Comment.count).to eql(Comment.count(+1))
      expect(post.comments_count).to eql(1)
    end
  end

  it 'should persit a post' do
    create(:post)
    expect(Post.count).to eql(Post.count(+1))
  end
end
