function ManageCourse(props) {
  debugger;
  return (
    <div>
      <h1>Manage Course</h1>
      {props.match.params.slug}
    </div>
  );
}

export default ManageCourse;
