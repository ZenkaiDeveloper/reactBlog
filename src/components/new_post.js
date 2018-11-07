import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'


class NewPost extends Component{

  renderField = (field)=>{
    const { meta } = field;
    const className = `${meta.touched && meta.error ? 'red-border' : ''}`
    return(
      <div >
        <div className="red">
          {meta.touched ? meta.error : ""}
        </div>
        <label>{field.label}</label>
        <input className={className} type="text" {...field.input}/>
      </div>
    )
  }

  onSubmit = (values) =>{
    this.props.createPost(values, ()=>{
      this.props.history.push('/');
    });
  }

  render(){
    const { handleSubmit } = this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
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
        <Link className="cancel-btn" to="/" >Cancel</Link>
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
    errors.categories = "Enter some categories!"
  }
  if(!values.content){
    errors.content = "Enter some content please"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(NewPost)
);
