import comment_extract as CE
import sentimentYouTube as SYT
import sys

def main():
	videoId = sys.argv[1]
	count = 20
	comments = CE.commentExtract(videoId, count)
	SYT.sentiment(comments)


if __name__ == '__main__':
	main()
