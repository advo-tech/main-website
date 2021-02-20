import React from 'react'
import { Link } from "gatsby"
import Image from "../components/image"

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

class SmallArticleDisplay extends React.Component {

    render(){
        const data = this.props.data;
        return (
            <Link to={"/content/"+data.node.frontmatter.slug}>
                <div class="container-left-quarter small_feature">
                    <div class="category-rule">
                        <h4 class="category-label">{data.node.frontmatter.section}</h4>
                    </div>
                    <div class="feature-title-small">
                        {data.node.frontmatter.title}
                    </div>
                    { data.node.frontmatter.section === "art" ?
                        <div className="feature-image-container-small">
                            <div class="feature-image" id="feature-3-image">
                                <Image name={data.node.frontmatter.images[0]}/>
                            </div>
                        </div>
                    :
                        <div class="feature-description-small">
                            {data.node.excerpt}
                        </div>
                    }
                    <div class="feature-author">
                        {data.node.frontmatter.authors.map(author => (
                            <Link to={"contributor/"+convertToSlug(author)} class="no-decoration">  {author}</Link>
                        ))}
                    </div>
                    <div class="feature-release-date-small">{data.node.frontmatter.date}</div>
                </div>
            </Link>
        );
    }
}

export default SmallArticleDisplay;
