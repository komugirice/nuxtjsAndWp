__NUXT_JSONP__("qiitaapplication/157", (function(a,b,c,d){return {data:[{post:{id:157,date:"2020-08-09T08:56:25",date_gmt:"2020-08-08T23:56:25",guid:{rendered:"http:\u002F\u002Fwordpressmyblog-env.eba-pyivcx8v.ap-northeast-1.elasticbeanstalk.com\u002F?p=157"},modified:"2020-08-19T10:40:21",modified_gmt:"2020-08-19T01:40:21",slug:"endlessscrolllistener",status:"publish",type:"post",link:"https:\u002F\u002Fwww.komugirice.com\u002Fqiitaapplication\u002F157\u002F",title:{rendered:"EndlessScrollListener"},content:{rendered:"\n\u003Cp\u003EQiitaAPIで記事データを取得し、RecyclerViewにエンドレスに表示する\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E下記のサイトから拝借\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ca rel=\"noopener noreferrer\" href=\"https:\u002F\u002Fwww.it-swarm.dev\u002Fja\u002Fandroid\u002Frecyclerviewで無限リストを実装する方法\u002F1049150995\u002F\"\u003Ehttps:\u002F\u002Fwww.it-swarm.dev\u002Fja\u002Fandroid\u002Frecyclerviewで無限リストを実装する方法\u002F1049150995\u002F\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cdiv class=\"mb20 clearfix\"\u003E\u003C\u002Fdiv\u003E\n\u003Cp class=\"filename\"\u003EEndlessScrollListener\u003C\u002Fp\u003E\n\n\n\n\u003Cpre class=\"EnlighterJSRAW\" data-enlighter-language=\"kotlin\" data-enlighter-theme=\"\" data-enlighter-highlight=\"\" data-enlighter-linenumbers=\"\" data-enlighter-lineoffset=\"6\" data-enlighter-title=\"\" data-enlighter-group=\"\"\u003E\u002F**\n * EndlessScrollListenerクラス\n *\n * @param mLinearLayoutManager\n *\u002F\nabstract class EndlessScrollListener(private val mLinearLayoutManager: LinearLayoutManager) :\n    RecyclerView.OnScrollListener() {\n\n    internal var firstVisibleItem: Int = 0\n    internal var visibleItemCount: Int = 0\n    internal var totalItemCount: Int = 0\n    private var visibleThreshold = 10\n    private var previousTotal = 0\n    private var loading = true\n    private var current_page = 1\n    \u002F\u002F スクロール条件件数を指定してください。取得件数を下回る場合はスクロールしません。\n    private val scrollOnItemCount: Int = 20\n\n\n    \u002F**\n     * onScrolledメソッド\n     *\n     * @param recyclerView\n     * @param dx\n     * @param dy\n     *\n     *\u002F\n    override fun onScrolled(recyclerView: RecyclerView, dx: Int, dy: Int) {\n        super.onScrolled(recyclerView, dx, dy)\n\n        visibleItemCount = recyclerView.childCount\n        \u002F\u002F 取得件数\n        totalItemCount = mLinearLayoutManager.itemCount\n        firstVisibleItem = mLinearLayoutManager.findFirstVisibleItemPosition()\n\n        if (loading) {\n            if (totalItemCount \u003E previousTotal) {\n                loading = false\n                previousTotal = totalItemCount\n            }\n        }\n\n        \u002F\u002F 取得件数がスクロール条件件数を上回る場合だけ実行する\n        if (scrollOnItemCount &lt;= totalItemCount) {\n            if (!loading &amp;&amp; totalItemCount - visibleItemCount &lt;= firstVisibleItem + visibleThreshold) {\n                current_page++\n\n                onLoadMore(current_page)\n\n                loading = true\n            }\n        }\n    }\n\n    \u002F**\n     * onLoadMoreメソッド\n     *\n     * @param current_page\n     *\n     *\u002F\n    abstract fun onLoadMore(current_page: Int)\n\n    \u002F**\n     * resetメソッド\n     *\n     *\u002F\n    fun reset() {\n        current_page = 1\n        previousTotal = 0\n        totalItemCount = 0\n        loading = true\n    }\n\n}\u003C\u002Fpre\u003E\n",protected:b},excerpt:{rendered:"\u003Cp\u003EQiitaAPIで記事データを取得し、RecyclerViewにエンドレスに表示する 下記のサイトから拝借 https:\u002F\u002Fwww.it-swarm.dev\u002Fja\u002Fandroid\u002Frecyclerviewで無限リストを実 [&hellip;]\u003C\u002Fp\u003E\n",protected:b},author:c,featured_media:0,comment_status:d,ping_status:d,sticky:b,template:"",format:"standard",meta:[],categories:[7],tags:[17,11],_links:{self:[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F157"}],collection:[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=157"}],"version-history":[{count:c,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F157\u002Frevisions"}],"predecessor-version":[{id:608,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F157\u002Frevisions\u002F608"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=157"}],"wp:term":[{taxonomy:"category",embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=157"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.komugirice.com\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=157"}],curies:[{name:"wp",href:"https:\u002F\u002Fapi.w.org\u002F{rel}",templated:a}]}}}],fetch:[],mutations:void 0}}(true,false,1,"closed")));