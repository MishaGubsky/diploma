class SocialNetworkMetrics

  def initialize(revision_id)
    @revision_id = revision_id
    @social_module = self.class.name
    @social_item = SocialNetwork.find_or_create(name: @social_module)
    @external_attributes = []
  end

  def parse_metrics
    external_metrics = {
      social_network_id: @social_item.id,
      revision_id: @revision_id
    }
    @external_attributes.each do |attribute|
      begin
        external_metrics[attribute.to_sym] = self.send(attribute.to_sym)
      rescue Exception => e
        puts "Error: get external metric #{attribute} from dynamic_metrics_id #{@revision_id}"
        puts e.message
      end
    end
    begin
      ExternalMetric.create(external_metrics)
    rescue Exception => e
      puts "Save external_metirc error, id: #{@revision_id}"
      puts e.message
    end
  end

end
