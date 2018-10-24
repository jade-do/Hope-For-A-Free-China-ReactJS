import React, {Component} from 'react';
import { Media } from 'reactstrap';

class CommunismInUSAcademia extends Component {
    constructor(props) {
    super(props);
    this.state = {
        articles: [
            {
                id: 0,
                title: 'PRC Political Influence and Interference Activities in American Higher Education​',
                author: 'Anastasya Lloyd-Damnjanovic',
                image: '/assets/images/prc-political-influence-and-interference-activities-in-american-higher-education-cover.png',
                category: 'communism-in-us-academia',
                abstract: 'U.S. colleges and universities create knowledge—and promote American well-being—through their exercise of academic freedom and openness. Openness demands that American universities admit the world’s best students, many of whom are Chinese. Academic freedom requires that all scholars in the United States respect principles of free inquiry and critical discourse, regardless of their countries of origin. With China as the greatest source of foreign students to the U.S., and with China’s authoritarian government summoning students to serve a motherland engaged in worldwide competition with the U.S., prudence dictates a close look at the impact of Chinese students and the Chinese officials charged with managing them on American campuses.',
                abstract_author: 'Kissinger Institute on China and the United States',
                link: 'https://www.wilsoncenter.org/publication/preliminary-study-prc-political-influence-and-interference-activities-american-higher'
            },
            {
                id: 1,
                title: 'Outsourced to China: Confucius Institutes and Soft Power in American Higher Education​',
                author: 'Rachelle Peterson',
                image: '/assets/images/confucius-institutes-and-soft-power-in-american-higher-education.jpg',
                abstract: 'Since 2004, the Chinese government has planted Confucius Institutes that offer Chinese language and culture courses at colleges and universities around the world—including more than 100 in the United States.These Institutes avoid Chinese political history and human rights abuses, portray Taiwan and Tibet as undisputed territories of China, and educate a generation of American students to know nothing more of China than the regime’s official history. This is a study of the 12 Confucius Institutes in New York and New Jersey. It examines China’s soft power influence through American higher education, and reveals new data on China’s funding, hiring, and academic freedom policies.',
                abstract_author: 'National Association of Scholar',
                category: 'communism-in-us-academia',
                link: 'https://www.nas.org/articles/outsourced_to_china_confucius_institutes_and_soft_power_in_american_higher'
            },
            {
                id: 2,
                title: 'CUCSSAs Are Key Bases for CCP Spies​',
                author: 'Stephanie Saul',
                image: '/assets/images/on-campuses-far-from-china-still-under-beijings-watchful-eyes.jpg',
                category: 'communism-in-us-academia',
                abstract: 'Perry Link, a China expert and co-editor of the English version of “The Tiananmen Papers,” a compilation of secret Chinese documents relating to the Tiananmen Square protests, characterized the student organization as “a tool of the government’s foreign ministry” that, among other activities, keeps tabs on unpatriotic speech among Chinese students.',                
                abstract_author: 'On Campuses Far From China, Still Under Beijing’s Watchful Eye',
                link: 'https://www.nytimes.com/2017/05/04/us/chinese-students-western-campuses-china-influence.html'
            }
        ],};
    }

    render() {
        const news_list = this.state.articles.map((article) => {
            return (
                <div key={article.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={article.image} alt={article.title} height="650px" width="450px"/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{article.title}</Media>
                            <Media heading><em>- {article.author}</em></Media>
                            <p>"{article.abstract}"</p>
                            <p><em>- {article.abstract_author}</em></p>
                        </Media>
                    </Media>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {news_list}
                    </Media>
                </div>
            </div>
        )
    }

}

export default CommunismInUSAcademia;