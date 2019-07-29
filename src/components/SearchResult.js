import React, { Component } from "react";
import { Item, Icon, Button, Label } from "semantic-ui-react";

export default class SearchResult extends Component {
  // handleClick = e => {
  //   e.preventDefault();
  //   console.log("saved button clicked");
  //   console.log(this.props.link);
  //   console.log(this.props.id);
  // };

  render() {
    let tags = this.props.tags.map((tag, index) => {
      return (
        <Label tag key={index}>
          {" "}
          {tag}{" "}
        </Label>
      );
    });

    return (
      <div>
        <Item>
          <Item.Image src={this.props.img} />
          <Icon name="heart">{this.props.favorites} </Icon>
          <br />
          <Icon name="thumbs up">{this.props.likes} </Icon>
          <br />
          {tags}
          <Button
            onClick={e =>
              this.props.saveImage(e, {
                id: this.props.id,
                link: this.props.link
              })
            }
          >
            {" "}
            Save{" "}
          </Button>
        </Item>
      </div>
    );
  }
}
