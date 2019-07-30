import React, { Component } from "react";
import { Item, Icon, Button, Label } from "semantic-ui-react";

export default class SearchResult extends Component {
  render() {
    let tags = this.props.tags.map((tag, index) => {
      return (
        <Label tag key={index} color="teal">
          {" "}
          {tag}{" "}
        </Label>
      );
    });

    return (
      <div>
        <Item className="search-result">
          <Item.Image size="medium" src={this.props.img} />
          <Item.Content>
            <Icon name="heart" color="red">
              {" "}
              {this.props.favorites}{" "}
            </Icon>
            <br />
            <Icon name="thumbs up" color="blue">
              {" "}
              {this.props.likes}{" "}
            </Icon>
            <br />
            {tags}
            <Button
              onClick={e =>
                this.props.saveImage(e, {
                  id: this.props.id,
                  link: this.props.link
                })
              }
              basic
              color="red"
            >
              {" "}
              Save{" "}
            </Button>
          </Item.Content>
        </Item>
      </div>
    );
  }
}
