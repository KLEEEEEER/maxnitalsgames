function checkDarkTheme()
                            {
                                if (localStorage.getItem('dark_theme') == "1")
                                {
                                    dark_theme_toggle_button_on.style.display = "inline-block";
                                    dark_theme_toggle_button_off.style.display = "none";
                                    main_body.classList.add("dark-theme");
                                }
                                else
                                {
                                    dark_theme_toggle_button_on.style.display = "none";
                                    dark_theme_toggle_button_off.style.display = "inline-block";
                                    main_body.classList.remove("dark-theme");
                                }
                            }
                            function setOnDarkTheme(event)
                            {
                                event.preventDefault();
                                console.log("setOnDarkTheme");
                                localStorage.setItem('dark_theme', "1");
                                checkDarkTheme();
                            }
                            function setOffDarkTheme(event)
                            {
                                event.preventDefault();
                                console.log("setOffDarkTheme");
                                localStorage.setItem('dark_theme', "0");
                                checkDarkTheme();
                            }

                            let dark_theme_toggle_button_on = document.getElementById("dark_theme_toggle_on");
                            let dark_theme_toggle_button_off = document.getElementById("dark_theme_toggle_off");
                            let main_body = document.getElementById("main_body");

                            dark_theme_toggle_button_on.addEventListener("click", setOffDarkTheme);
                            dark_theme_toggle_button_off.addEventListener("click", setOnDarkTheme);

                            checkDarkTheme();
