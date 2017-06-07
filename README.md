###octoKIT
***

1. *go to your dev-path:*

    ```
    cd /var/www
    ```
  
2. *create project-path by newsite.sh:*

    ```
    sh newsite.sh yourProjectName
    ```

3. *go to your project-path:*

    ```
    cd yourProjectName
    ```

4. *initialize git in your project-path:*

    ```
    git init
    ```

5. *connect your remote repository to your project:*

    ```
    git remote add origin ...
    ```

6. *switch to needed git branch:*

    ```
    git checkout -b slice
    ```

7. *put octoKIT files into your project-path*

8. *if you use legacy node version (0.12), run node-modules installation by command:*

    ```
    sudo npm install
    ```
9. *find startPage variable in your gulpfile.js and replace it equal ot yourProjectName:*

    ```javascript
    var startPage = 'yourProjectName.lo/menu.html';
    ```

10. *run gulp for development by command:*

    ```
    gulp
    ```
11. *run gulp for production (with minification of images, CSS and JS files) by command:*
  
    ```
    gulp prod
    ```
