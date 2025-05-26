import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Routes, Route } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { useAppSelector } from 'app/hooks/useAppDispatch';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useAppSelector(getUserAuthData);
    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            if (route.authOnly && !isAuth) return false;
            return true;
        });
    }, [isAuth]);

    return (
        <div>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    {routes.map(({ element, path }) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    <Suspense fallback={<PageLoader />}>
                                        <div className="page-wrapper">
                                            {element}
                                        </div>
                                    </Suspense>
                                }
                            />
                        );
                    })}
                </Routes>
            </Suspense>
        </div>
    );
};

export default memo(AppRouter);
