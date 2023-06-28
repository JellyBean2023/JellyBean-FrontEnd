const ApplyForms = (props) => {
  const {id} = props;

  const components = {
    java: <main>자바</main>,
    pm: <main>피엠</main>,
    bigdata: <main>빅</main>,
  }

  return (
    components[id] 
  );
}

export default ApplyForms;