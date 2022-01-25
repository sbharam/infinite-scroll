import { Component, OnInit } from '@angular/core';
import { fromEvent, map } from 'rxjs';
import { RedditPost } from '../model/reddit-post';
import { RedditDataService } from '../services/reddit-data.service';

@Component({
  selector: 'app-reddit-list-container',
  templateUrl: './reddit-list-container.component.html',
  styleUrls: ['./reddit-list-container.component.scss']
})

export class RedditListContainerComponent implements OnInit {

  redditPosts: Array<RedditPost>;
  isLoaderVisible: boolean = false;
  after: string;

  constructor(private redditDataService: RedditDataService) { }

  ngOnInit(): void {
    this.isLoaderVisible = true;
    this.redditDataService.getPosts()
      .subscribe((redditPostResData: any) => {
        this.isLoaderVisible = false;
        this.after = redditPostResData.data.after;
        this.redditPosts = this.formRedditPosts(redditPostResData);
      });

    const redditContainerContent = document.getElementById('reddit_container');
    const scrollEvtObs$ = fromEvent(redditContainerContent!, 'scroll').pipe(map((evt: any) => { return evt.target.scrollTop; }));

    scrollEvtObs$.subscribe((scrollCurrentPosition: any) => {
      // Get end Of the Page by Entire content (Height of all content) minus only Visible content (Only visible height)
      const endOfThePageLimit = redditContainerContent!.scrollHeight - redditContainerContent!.clientHeight;

      // Below condition checks whether scroll is reached at bottom of the page.
      if (Math.round(scrollCurrentPosition) === endOfThePageLimit) {
        this.redditDataService.getPosts(this.after)
          .subscribe((redditPostResData: any) => {
            this.after = redditPostResData.data.after;
            const nextSetOfPosts: Array<RedditPost> = this.formRedditPosts(redditPostResData);
            this.redditPosts = [...this.redditPosts, ...nextSetOfPosts];
          });
      }
    });
  }

  private formRedditPosts(redditPostResData: any) {
    const redditPosts = redditPostResData.data.children.map((post: any) => {
      let redditPost: RedditPost = new RedditPost();
      redditPost.title = post.data.title;
      redditPost.url = post.data.url;
      redditPost.subreddit = post.data.subreddit;
      redditPost.thumbnail = post.data.thumbnail;
      return redditPost;
    });
    return redditPosts;
  }

}
