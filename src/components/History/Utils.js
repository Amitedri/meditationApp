export const mapHistory = (list) => {
    if (list.length < 1) {
      return;
    }
    return list.map((elem) => {
      return (
        <div className="userSessionList">
          <div className="tdLeft">
            <tr>{elem.date}</tr>
          </div>
          <div className="tdRight">
            <tr>{elem.sessionLength}</tr>
          </div>
        </div>
      );
    });
  };