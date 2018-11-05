import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class NewPost extends Component{


  renderField = (field)=>{
    return(
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input}/>
      </div>
    )
  }

  render(){
    return(
      <form>
        <h1>Add a New Post</h1>
        <div>
          <Field label="Title:" name="title" component={this.renderField} />
        </div>
        <div>
          <Field label="Categories:" name="categories" component={this.renderField} />
        </div>
        <div>
          <Field label="Post Content:" name="content" component={this.renderField} />
        </div>
        <input value="Save" type="submit"></input>
      </form>
    )
  }
}

function validate(values){
  const errors= {};
  if(!values.title){
    errors.title = "Enter a title!"
  }
  if(!values.categories){
    errors.categpries = "Enter some categories!"
  }
  if(!values.content){
    errors.content = "Enter spme content please"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(NewPost);
