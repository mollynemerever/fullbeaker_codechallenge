import React, { Component } from "react";
import { Item, Icon, Button, Label } from "semantic-ui-react";

export default class SearchResult extends Component {
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
          <Button> Save </Button>
        </Item>
      </div>
    );
  }
}
