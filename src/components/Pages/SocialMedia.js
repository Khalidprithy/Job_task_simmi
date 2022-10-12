import React from 'react';

const SocialMedia = () => {
    return (
        <div className='bg-accent'>
            <h1 className='text-4xl text-center text-secondary py-10'>Social Media Handle</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>

                <div className='mx-auto'>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsimmifoundation.org&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1122927771823270" width="340" height="500" className='overflow-hidden border-0' scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div className='mx-auto'>
                    <a class="twitter-timeline" data-width="340" data-height="500" data-theme="dark" href="https://twitter.com/simmifoundation?ref_src=twsrc%5Etfw">Tweets by simmifoundation</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;