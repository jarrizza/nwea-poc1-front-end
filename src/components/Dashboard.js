function Dashboard(props) {
    let url = "https://4mile.looker.com/embed/dashboards-next/255"; // this is default
    if (props.userInput && props.userInput.dashboardUrl) {
  //      console.log(props.userInput.dashboardUrl);
    }

    return (
        <div>
          <h2>Dashboard</h2>
          <div className="dashboard">
              <iframe title="dashboard" className="iframe" src={url}></iframe>
          </div>
        </div>
    );
}

export default Dashboard
