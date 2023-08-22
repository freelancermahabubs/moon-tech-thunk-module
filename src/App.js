import {RouterProvider} from "react-router-dom";

import routes from "./routes/routes";
import {Provider} from "react-redux";
import store from "./app/store";
import {Toaster} from "react-hot-toast";
import AuthProvider from "./provider/AuthProvider";

function App() {
  return (
    <div>
      <Toaster />
      <AuthProvider>
    
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
