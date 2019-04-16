searchNodes=[{"ref":"NeoSemantics.html","title":"NeoSemantics","module":"NeoSemantics","type":"module","doc":"Module providing simple wrapper functions for the neosemantics library. The neosemantics library is authored by Jesús Barrasa (and see https://jbarrasa.com for example usage posts). Note that the wrapper functions use snake case which is more usual in Elixir, e.g. NeoSemantics.import_rdf/3 for semantics.importRDF. Also there is an additional first argument for the bolt_sips connection. And in the examples this is shown being piped in to emphasize that this is an additional argument. Note also that the wrapper functions come in two flavours: with and without a trailing bang (!) character. The simple form returns a success or failure tuple which can be used in pattern matching, whereas the marked form returns a plain value or raises an exception. When a positive outcome is expected the marked form may be easier to use. (See Elixir naming conventions for more info.) TODO - Add parameter maps for function calls which give some fine control. For now, defaults are fine. Examples # simple form - import_rdf/3 iex&gt; {:ok, resp} = (conn() |&gt; NeoSemantics.import_rdf(uri, fmt)) {:ok, [ %{ &quot;extraInfo&quot; =&gt; &quot;&quot;, &quot;namespaces&quot; =&gt; %{ &quot;http://purl.org/dc/elements/1.1/&quot; =&gt; &quot;dc&quot;, &quot;http://purl.org/dc/terms/&quot; =&gt; &quot;dct&quot;, &quot;http://purl.org/ontology/bibo/&quot; =&gt; &quot;ns0&quot;, &quot;http://schema.org/&quot; =&gt; &quot;sch&quot;, &quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot; =&gt; &quot;rdf&quot;, &quot;http://www.w3.org/2000/01/rdf-schema#&quot; =&gt; &quot;rdfs&quot;, &quot;http://www.w3.org/2002/07/owl#&quot; =&gt; &quot;owl&quot;, &quot;http://www.w3.org/2004/02/skos/core#&quot; =&gt; &quot;skos&quot; }, &quot;terminationStatus&quot; =&gt; &quot;OK&quot;, &quot;triplesLoaded&quot; =&gt; 8 } ]} iex&gt; resp [ %{ &quot;extraInfo&quot; =&gt; &quot;&quot;, &quot;namespaces&quot; =&gt; %{ &quot;http://purl.org/dc/elements/1.1/&quot; =&gt; &quot;dc&quot;, ... }, &quot;terminationStatus&quot; =&gt; &quot;OK&quot;, &quot;triplesLoaded&quot; =&gt; 8 } ] # marked form - import_rdf!/3 iex&gt; conn() |&gt; NeoSemantics.import_rdf!(uri, fmt) [ %{ &quot;extraInfo&quot; =&gt; &quot;&quot;, &quot;namespaces&quot; =&gt; %{ &quot;http://purl.org/dc/elements/1.1/&quot; =&gt; &quot;dc&quot;, ... }, &quot;terminationStatus&quot; =&gt; &quot;OK&quot;, &quot;triplesLoaded&quot; =&gt; 8 } ] # marked form - import_turtle!/2 iex&gt; conn() |&gt; NeoSemantics.import_turtle!(uri) [ %{ &quot;extraInfo&quot; =&gt; &quot;&quot;, &quot;namespaces&quot; =&gt; %{ &quot;http://purl.org/dc/elements/1.1/&quot; =&gt; &quot;dc&quot;, ... }, &quot;terminationStatus&quot; =&gt; &quot;OK&quot;, &quot;triplesLoaded&quot; =&gt; 8 } ]"},{"ref":"NeoSemantics.html#hello/1","title":"NeoSemantics.hello/1","module":"NeoSemantics","type":"function","doc":""},{"ref":"NeoSemantics.html#import_jsonld/2","title":"NeoSemantics.import_jsonld/2","module":"NeoSemantics","type":"function","doc":"Wrapper for import_rdf/3 for an &quot;JSON-LD&quot; RDF format."},{"ref":"NeoSemantics.html#import_jsonld!/2","title":"NeoSemantics.import_jsonld!/2","module":"NeoSemantics","type":"function","doc":"Wrapper for import_rdf!/3 for an &quot;JSON-LD&quot; RDF format."},{"ref":"NeoSemantics.html#import_ntriples/2","title":"NeoSemantics.import_ntriples/2","module":"NeoSemantics","type":"function","doc":"Wrapper for import_rdf/3 for an &quot;N-Triples&quot; RDF format."},{"ref":"NeoSemantics.html#import_ntriples!/2","title":"NeoSemantics.import_ntriples!/2","module":"NeoSemantics","type":"function","doc":"Wrapper for import_rdf!/3 for an &quot;N-Triples&quot; RDF format."},{"ref":"NeoSemantics.html#import_rdf/3","title":"NeoSemantics.import_rdf/3","module":"NeoSemantics","type":"function","doc":"Imports into Neo4j all the triples in the data set according to the mapping defined in this post. Sends the Cypher query call semantics.importRDF(...) to the server and returns {:ok, Bolt.Sips.Response} or {:error, error} otherwise"},{"ref":"NeoSemantics.html#import_rdf!/3","title":"NeoSemantics.import_rdf!/3","module":"NeoSemantics","type":"function","doc":"The same as import_rdf/3 but raises a Bolt.Sips.Exception if it fails. Returns the server response otherwise."},{"ref":"NeoSemantics.html#import_rdfxml/2","title":"NeoSemantics.import_rdfxml/2","module":"NeoSemantics","type":"function","doc":"Wrapper for import_rdf/3 for an &quot;RDF/XML&quot; RDF format."},{"ref":"NeoSemantics.html#import_rdfxml!/2","title":"NeoSemantics.import_rdfxml!/2","module":"NeoSemantics","type":"function","doc":"Wrapper for import_rdf!/3 for an &quot;RDF/XML&quot; RDF format."},{"ref":"NeoSemantics.html#import_trig/2","title":"NeoSemantics.import_trig/2","module":"NeoSemantics","type":"function","doc":"Wrapper for import_rdf/3 for an &quot;TriG&quot; RDF format."},{"ref":"NeoSemantics.html#import_trig!/2","title":"NeoSemantics.import_trig!/2","module":"NeoSemantics","type":"function","doc":"Wrapper for import_rdf!/3 for an &quot;TriG&quot; RDF format."},{"ref":"NeoSemantics.html#import_turtle/2","title":"NeoSemantics.import_turtle/2","module":"NeoSemantics","type":"function","doc":"Wrapper for import_rdf/3 for an &quot;Turtle&quot; RDF format."},{"ref":"NeoSemantics.html#import_turtle!/2","title":"NeoSemantics.import_turtle!/2","module":"NeoSemantics","type":"function","doc":"Wrapper for import_rdf!/3 for an &quot;Turtle&quot; RDF format."},{"ref":"NeoSemantics.html#lite_onto_import/3","title":"NeoSemantics.lite_onto_import/3","module":"NeoSemantics","type":"function","doc":"Imports the basic elements of an OWL or RDFS ontology, i.e. Classes, Properties, Domains, Ranges. Sends the Cypher query call semantics.liteOntoImport(...) to the server and returns {:ok, Bolt.Sips.Response} or {:error, error} otherwise"},{"ref":"NeoSemantics.html#lite_onto_import!/3","title":"NeoSemantics.lite_onto_import!/3","module":"NeoSemantics","type":"function","doc":"The same as lite_onto_import/3 but raises a Bolt.Sips.Exception if it fails. Returns the server response otherwise."},{"ref":"NeoSemantics.html#preview_rdf/3","title":"NeoSemantics.preview_rdf/3","module":"NeoSemantics","type":"function","doc":"Parses some RDF and produces a preview in Neo4j browser. Sends the Cypher query call semantics.previewRDF(...) to the server and returns {:ok, Bolt.Sips.Response} or {:error, error} otherwise"},{"ref":"NeoSemantics.html#preview_rdf!/3","title":"NeoSemantics.preview_rdf!/3","module":"NeoSemantics","type":"function","doc":"The same as preview_rdf/3 but raises a Bolt.Sips.Exception if it fails. Returns the server response otherwise."},{"ref":"NeoSemantics.html#preview_rdf_snippet/3","title":"NeoSemantics.preview_rdf_snippet/3","module":"NeoSemantics","type":"function","doc":"Identical to previewRDF but takes an RDF snippet instead of the url of the dataset. Sends the Cypher query call semantics.previewRDFSnippet(...) to the server and returns {:ok, Bolt.Sips.Response} or {:error, error} otherwise"},{"ref":"NeoSemantics.html#preview_rdf_snippet!/3","title":"NeoSemantics.preview_rdf_snippet!/3","module":"NeoSemantics","type":"function","doc":"The same as preview_rdf_snippet/3 but raises a Bolt.Sips.Exception if it fails. Returns the server response otherwise."},{"ref":"NeoSemantics.html#stream_rdf/3","title":"NeoSemantics.stream_rdf/3","module":"NeoSemantics","type":"function","doc":"Parses some RDF and streams the triples as records of the form subject, predicate, object plus three additional fields. Sends the Cypher query call semantics.streamRDF(...) to the server and returns {:ok, Bolt.Sips.Response} or {:error, error} otherwise"},{"ref":"NeoSemantics.html#stream_rdf!/3","title":"NeoSemantics.stream_rdf!/3","module":"NeoSemantics","type":"function","doc":"The same as stream_rdf/3 but raises a Bolt.Sips.Exception if it fails. Returns the server response otherwise."},{"ref":"NeoSemantics.Extension.html","title":"NeoSemantics.Extension","module":"NeoSemantics.Extension","type":"module","doc":"Module providing simple wrapper functions for the neosemantics library extension functions. TODO - format support"},{"ref":"NeoSemantics.Extension.html#cypher/2","title":"NeoSemantics.Extension.cypher/2","module":"NeoSemantics.Extension","type":"function","doc":"Produces an RDF serialization of the nodes and relationships returned by the query. Currently only RDF Turtle is supported. Also have a problem with supporting the showOnlyMapped parameter. Examples iex&gt; cypher = TestGraph.LPG.read_query(&quot;node1.cypher&quot;).data &quot;match (n) return n limit 1\\n&quot; iex&gt; IO.puts (cypher |&gt; NeoSemantics.Extension.cypher) @prefix neovoc: &lt;neo4j://defaultvocabulary#&gt; . @prefix neoind: &lt;neo4j://indiv#&gt; . neoind:919 a neovoc:Resource; neovoc:rdfs__label &quot;Hello World&quot;; neovoc:uri &quot;http://dbpedia.org/resource/Hello_World&quot; . :ok"},{"ref":"NeoSemantics.Extension.html#cypher_on_rdf/1","title":"NeoSemantics.Extension.cypher_on_rdf/1","module":"NeoSemantics.Extension","type":"function","doc":"Produces an RDF serialization of the nodes and relationships returned by the query. Currently only RDF Turtle is supported. Examples iex&gt; cypher = TestGraph.LPG.read_query(&quot;nodes.cypher&quot;).data &quot;match (n) return distinct n\\n&quot; iex&gt; cypher |&gt; NeoSemantics.Extension.cypher_on_rdf"},{"ref":"NeoSemantics.Extension.html#node_by_id/2","title":"NeoSemantics.Extension.node_by_id/2","module":"NeoSemantics.Extension","type":"function","doc":"Exports from Neo4j an LPG graph transformed into an RDF graph. The graph is centered on a node identified by node_id. This returns the full context unless an optional boolean arg exclude_context is passed as true which will exclude context if present. Examples iex&gt; NeoSemantics.Extension.node_by_id(1783) &quot;@prefix neovoc: &lt;neo4j://defaultvocabulary#&gt; .\\n@prefix neoind: &lt;neo4j://indiv#&gt; .\\n\\n\\nneoind:1783 a neovoc:Resource;\\n neovoc:ns0__creator neoind:1785;\\n neovoc:ns0__homepage neoind:1784;\\n neovoc:ns0__license neoind:1786;\\n neovoc:ns0__name &quot;Elixir&quot;; neovoc:uri &quot;http://example.org/Elixir&quot; .\\n&quot;"},{"ref":"NeoSemantics.Extension.html#node_by_uri/2","title":"NeoSemantics.Extension.node_by_uri/2","module":"NeoSemantics.Extension","type":"function","doc":"Exports from Neo4j an LPG graph transformed into an RDF graph. The graph is centered on a node identified by node_uri. This returns the full context unless an optional boolean arg exclude_context is passed as true which will exclude context if present. Examples iex&gt; NeoSemantics.Extension.node_by_uri(&quot;http://example.org/Elixir&quot;) &quot;@prefix neovoc: &lt;neo4j://vocabulary#&gt; .\\n\\n\\n&lt;http://example.org/Elixir&gt; &lt;http://example.org/creator&gt; &lt;http://dbpedia.org/resource/José_Valim&gt;;\\n &lt;http://example.org/homepage&gt; &lt;http://elixir-lang.org&gt;;\\n &lt;http://example.org/license&gt; &lt;http://dbpedia.org/resource/Apache_License&gt;;\\n &lt;http://example.org/name&gt; &quot;Elixir&quot; .\\n&quot;"},{"ref":"NeoSemantics.Extension.html#ping/0","title":"NeoSemantics.Extension.ping/0","module":"NeoSemantics.Extension","type":"function","doc":"Pings the Neo4j service. This returns a JSON confirmation that the service is up. Examples iex&gt; NeoSemantics.Extension.ping {&quot;ping&quot;:&quot;here!&quot;} :ok"},{"ref":"NeoSemantics.Inference.html","title":"NeoSemantics.Inference","module":"NeoSemantics.Inference","type":"module","doc":"Module providing simple wrapper functions for the neosemantics library inference functions."},{"ref":"NeoSemantics.Inference.html#get_nodes_linked_to/2","title":"NeoSemantics.Inference.get_nodes_linked_to/2","module":"NeoSemantics.Inference","type":"function","doc":"Returns all nodes with label label or its sublabels."},{"ref":"NeoSemantics.Inference.html#get_nodes_with_label/2","title":"NeoSemantics.Inference.get_nodes_with_label/2","module":"NeoSemantics.Inference","type":"function","doc":"Returns all nodes connected to node with label label or its subcategories."},{"ref":"NeoSemantics.Inference.html#get_rels/2","title":"NeoSemantics.Inference.get_rels/2","module":"NeoSemantics.Inference","type":"function","doc":"Returns all outgoing relationships of type rel."},{"ref":"NeoSemantics.Mapping.html","title":"NeoSemantics.Mapping","module":"NeoSemantics.Mapping","type":"module","doc":"Module providing simple wrapper functions for the neosemantics library mapping functions."},{"ref":"NeoSemantics.Mapping.html#add_common_schemas/1","title":"NeoSemantics.Mapping.add_common_schemas/1","module":"NeoSemantics.Mapping","type":"function","doc":"Creates a references to a number of popular vocabularies including schema.org, Dublin Core, SKOS, OWL, etc."},{"ref":"NeoSemantics.Mapping.html#add_mapping_to_schema/4","title":"NeoSemantics.Mapping.add_mapping_to_schema/4","module":"NeoSemantics.Mapping","type":"function","doc":"Creates a mapping for an element in the Neo4j DB schema to a vocabulary element."},{"ref":"NeoSemantics.Mapping.html#add_schema/3","title":"NeoSemantics.Mapping.add_schema/3","module":"NeoSemantics.Mapping","type":"function","doc":"Creates a reference to a vocabulary. Needed to define mappings."},{"ref":"NeoSemantics.Mapping.html#drop_mapping/2","title":"NeoSemantics.Mapping.drop_mapping/2","module":"NeoSemantics.Mapping","type":"function","doc":"Returns an output text message indicating success/failure of the deletion."},{"ref":"NeoSemantics.Mapping.html#drop_schema/2","title":"NeoSemantics.Mapping.drop_schema/2","module":"NeoSemantics.Mapping","type":"function","doc":"Deletes a vocabulary reference and all associated mappings."},{"ref":"NeoSemantics.Mapping.html#list_mappings/2","title":"NeoSemantics.Mapping.list_mappings/2","module":"NeoSemantics.Mapping","type":"function","doc":"Returns a list with all the mappings."},{"ref":"NeoSemantics.Mapping.html#list_schemas/2","title":"NeoSemantics.Mapping.list_schemas/2","module":"NeoSemantics.Mapping","type":"function","doc":"Returns all vocabulary references."}]