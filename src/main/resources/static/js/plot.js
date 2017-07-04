/**
 * Created by Administrator on 2017/6/28.
 */
$(function () {
    $(".plot_button").click(function () {
        var plot = document.getElementById("plot_name");
        console.debug(plot.innerText+"-----"+this.innerText);
        console.debug(plot.name+"-----"+this.name);
        plot.innerText = this.innerText;
        plot.name = this.name;
        this.style.color = "#F14368";
    })
    $(".plot_button").focus(function () {
        this.style.color = "#F14368";
    })
    $(".plot_button").blur(function () {
        this.style.color = "black";
    })

    $(".plot_three_areaplot_button").click(function () {
        var plot_name =  this.innerText;
        var plot_id = this.name;
        window.opener.document.getElementById("plot_id").value = plot_name;
        window.opener.document.getElementById("plot_id").name = plot_id;
        window.close();
    })

})
