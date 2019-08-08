import React from "react";

interface Props {
    className?: string;
}

export default function TwitterShareButton(props: Props) {
    return (
        <div className={props.className}>
            <a href={`https://twitter.com/intent/tweet?button_hashtag=share&ref_src=twsrc%5Etfw`}
                className="twitter-hashtag-button"
                data-size="large"
                data-text="DiscordでSplatoon2のブキランダムができる！"
                data-url="https://stin-dev.github.io/hello-splatoon-bot/"
                data-related="stin_factory"
                data-lang="ja"
                data-dnt="true"
                data-show-count="false">Tweet #share</a>
        </div>
    );
}
