import { routeConfig } from "shared/config/routeConfig/routeConfig";
import {Routes,Route} from 'react-router-dom';
import { Suspense } from "react";

const AppRouter = () => {
   
    return (
        <div>
         <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => {
          return  <Route 
            key={path}
            path={path}
            element={(
                <Suspense fallback={<h2>Loading...</h2>}>
                    <div className="page-wrapper">
                    {element}
                    </div>
                </Suspense>
            )}
            />
        })}
      </Routes>
      </Suspense>
    </div>
  )
}

export default AppRouter